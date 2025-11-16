'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Upload, Video, ImageIcon, Loader2 } from 'lucide-react'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { put } from '@vercel/blob'
import { awardVisupoints, VISUPOINT_REWARDS } from '@/lib/gamification'

export default function UploadPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [videoPreview, setVideoPreview] = useState<string>('')
  const [thumbnailPreview, setThumbnailPreview] = useState<string>('')
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState('')
  const [error, setError] = useState('')

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setVideoFile(file)
      setVideoPreview(URL.createObjectURL(file))
    }
  }

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setThumbnailFile(file)
      setThumbnailPreview(URL.createObjectURL(file))
    }
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!videoFile || !title) {
      setError('Please provide a title and video file')
      return
    }

    setUploading(true)
    setError('')
    setUploadProgress('Uploading video...')

    try {
      const supabase = getSupabaseBrowserClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        setError('You must be logged in to upload videos')
        setUploading(false)
        return
      }

      // Upload video to Vercel Blob
      const videoBlob = await put(`videos/${user.id}/${Date.now()}-${videoFile.name}`, videoFile, {
        access: 'public',
      })

      setUploadProgress('Uploading thumbnail...')

      // Upload thumbnail if provided
      let thumbnailUrl = ''
      if (thumbnailFile) {
        const thumbnailBlob = await put(`thumbnails/${user.id}/${Date.now()}-${thumbnailFile.name}`, thumbnailFile, {
          access: 'public',
        })
        thumbnailUrl = thumbnailBlob.url
      }

      setUploadProgress('Creating video record...')

      // Create video record in database
      const { data: videoData, error: dbError } = await supabase
        .from('videos')
        .insert({
          user_id: user.id,
          title,
          description,
          video_url: videoBlob.url,
          thumbnail_url: thumbnailUrl || null,
          status: 'published',
        })
        .select()
        .single()

      if (dbError) {
        throw dbError
      }

      await awardVisupoints(user.id, VISUPOINT_REWARDS.VIDEO_UPLOAD, 'Video uploaded')

      setUploadProgress('Video uploaded successfully!')
      
      // Redirect to video page after a short delay
      setTimeout(() => {
        router.push(`/video/${videoData.id}`)
        router.refresh()
      }, 1000)

    } catch (err) {
      console.error('[v0] Upload error:', err)
      setError(err instanceof Error ? err.message : 'Failed to upload video')
      setUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Upload Video</h1>
            <p className="text-muted-foreground">
              Share your content and start earning visupoints
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Video Details</CardTitle>
              <CardDescription>
                Fill in the information about your video
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpload} className="space-y-6">
                {error && (
                  <div className="bg-destructive/10 border border-destructive/50 text-destructive px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                {uploading && (
                  <div className="bg-primary/10 border border-primary/50 text-primary px-4 py-3 rounded-lg text-sm flex items-center gap-3">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {uploadProgress}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    placeholder="My Amazing Video"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    disabled={uploading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell viewers about your video..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    disabled={uploading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="video">Video File *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                    {videoPreview ? (
                      <div className="space-y-4">
                        <video
                          src={videoPreview}
                          controls
                          className="w-full rounded-lg bg-black"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setVideoFile(null)
                            setVideoPreview('')
                          }}
                          disabled={uploading}
                        >
                          Change Video
                        </Button>
                      </div>
                    ) : (
                      <label htmlFor="video" className="flex flex-col items-center gap-3 cursor-pointer">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                          <Video className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">Click to upload video</p>
                          <p className="text-xs text-muted-foreground mt-1">MP4, WebM, or OGG (max 100MB)</p>
                        </div>
                        <input
                          id="video"
                          type="file"
                          accept="video/*"
                          onChange={handleVideoChange}
                          className="hidden"
                          required
                          disabled={uploading}
                        />
                      </label>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="thumbnail">Thumbnail (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 hover:border-secondary/50 transition-colors">
                    {thumbnailPreview ? (
                      <div className="space-y-4">
                        <img
                          src={thumbnailPreview || "/placeholder.svg"}
                          alt="Thumbnail preview"
                          className="w-full rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setThumbnailFile(null)
                            setThumbnailPreview('')
                          }}
                          disabled={uploading}
                        >
                          Change Thumbnail
                        </Button>
                      </div>
                    ) : (
                      <label htmlFor="thumbnail" className="flex flex-col items-center gap-3 cursor-pointer">
                        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-secondary" />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">Click to upload thumbnail</p>
                          <p className="text-xs text-muted-foreground mt-1">PNG, JPG, or WebP (recommended 1280x720)</p>
                        </div>
                        <input
                          id="thumbnail"
                          type="file"
                          accept="image/*"
                          onChange={handleThumbnailChange}
                          className="hidden"
                          disabled={uploading}
                        />
                      </label>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={uploading || !videoFile || !title}
                  >
                    {uploading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Video
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                    disabled={uploading}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

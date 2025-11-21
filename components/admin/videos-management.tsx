"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { deleteVideo, updateVideoStatus } from "@/lib/admin-actions"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Loader2, Trash2, Eye } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Video {
  id: string
  title: string
  description: string | null
  status: string
  views: number
  created_at: string
  user_id: string
}

export function VideosManagement() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchVideos()
  }, [])

  async function fetchVideos() {
    const supabase = getSupabaseBrowserClient()
    const { data, error } = await supabase.from("videos").select("*").order("created_at", { ascending: false })

    if (!error && data) {
      setVideos(data)
    }
    setLoading(false)
  }

  const filteredVideos = videos.filter((video) => video.title?.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleStatusChange = async (videoId: string, newStatus: string) => {
    try {
      await updateVideoStatus(videoId, newStatus)
      await fetchVideos()
    } catch (error) {
      console.error("Error updating status:", error)
    }
  }

  const handleDelete = async (videoId: string) => {
    try {
      await deleteVideo(videoId)
      await fetchVideos()
    } catch (error) {
      console.error("Error deleting video:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Rechercher par titre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm bg-purple-900/20 border-purple-500/30 text-white"
      />

      <div className="rounded-md border border-purple-500/30 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-purple-800/30">
              <TableHead className="text-purple-100">Titre</TableHead>
              <TableHead className="text-purple-100">Statut</TableHead>
              <TableHead className="text-purple-100">Vues</TableHead>
              <TableHead className="text-purple-100">Date</TableHead>
              <TableHead className="text-purple-100">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVideos.map((video) => (
              <TableRow key={video.id} className="border-purple-500/20">
                <TableCell className="text-white font-medium">{video.title}</TableCell>
                <TableCell>
                  <Select defaultValue={video.status} onValueChange={(value) => handleStatusChange(video.id, value)}>
                    <SelectTrigger className="w-32 bg-purple-900/20 border-purple-500/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="published">Publié</SelectItem>
                      <SelectItem value="pending">En attente</SelectItem>
                      <SelectItem value="rejected">Rejeté</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-200">
                    {video.views} vues
                  </Badge>
                </TableCell>
                <TableCell className="text-white text-sm">
                  {new Date(video.created_at).toLocaleDateString("fr-FR")}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-500/30 text-purple-200 hover:bg-purple-600/20 bg-transparent"
                      onClick={() => window.open(`/video/${video.id}`, "_blank")}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-500/30 text-red-300 hover:bg-red-600/20 bg-transparent"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
                          <AlertDialogDescription>
                            Êtes-vous sûr de vouloir supprimer cette vidéo ? Cette action est irréversible.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuler</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(video.id)}>Supprimer</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

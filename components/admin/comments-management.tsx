"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { deleteComment } from "@/lib/admin-actions"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Trash2 } from "lucide-react"
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

interface Comment {
  id: string
  content: string
  created_at: string
  user_id: string
  video_id: string
}

export function CommentsManagement() {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchComments()
  }, [])

  async function fetchComments() {
    const supabase = getSupabaseBrowserClient()
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100)

    if (!error && data) {
      setComments(data)
    }
    setLoading(false)
  }

  const filteredComments = comments.filter((comment) =>
    comment.content?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDelete = async (commentId: string) => {
    try {
      await deleteComment(commentId)
      await fetchComments()
    } catch (error) {
      console.error("Error deleting comment:", error)
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
        placeholder="Rechercher dans les commentaires..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm bg-purple-900/20 border-purple-500/30 text-white"
      />

      <div className="rounded-md border border-purple-500/30 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-purple-800/30">
              <TableHead className="text-purple-100">Contenu</TableHead>
              <TableHead className="text-purple-100">Date</TableHead>
              <TableHead className="text-purple-100">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredComments.map((comment) => (
              <TableRow key={comment.id} className="border-purple-500/20">
                <TableCell className="text-white max-w-md">
                  <p className="line-clamp-2">{comment.content}</p>
                </TableCell>
                <TableCell className="text-white text-sm">
                  {new Date(comment.created_at).toLocaleString("fr-FR")}
                </TableCell>
                <TableCell>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-500/30 text-red-300 hover:bg-red-600/20 bg-transparent"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Supprimer
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
                        <AlertDialogDescription>
                          Êtes-vous sûr de vouloir supprimer ce commentaire ? Cette action est irréversible.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(comment.id)}>Supprimer</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

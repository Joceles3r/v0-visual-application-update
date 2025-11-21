"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { updateUserRole, updateUserVisupoints } from "@/lib/admin-actions"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"

interface User {
  id: string
  email: string
  full_name: string | null
  role: string
  visupoints: number
  total_views: number
  created_at: string
}

export function UsersManagement() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const supabase = getSupabaseBrowserClient()
    const { data, error } = await supabase.from("users").select("*").order("created_at", { ascending: false })

    if (!error && data) {
      setUsers(data)
    }
    setLoading(false)
  }

  const filteredUsers = users.filter(
    (user) =>
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.full_name?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      await updateUserRole(userId, newRole)
      await fetchUsers()
    } catch (error) {
      console.error("Error updating role:", error)
    }
  }

  const handleVisuPointsUpdate = async (userId: string, points: number) => {
    try {
      await updateUserVisupoints(userId, points)
      await fetchUsers()
    } catch (error) {
      console.error("Error updating visupoints:", error)
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
        placeholder="Rechercher par email ou nom..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm bg-purple-900/20 border-purple-500/30 text-white"
      />

      <div className="rounded-md border border-purple-500/30 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-purple-800/30">
              <TableHead className="text-purple-100">Email</TableHead>
              <TableHead className="text-purple-100">Nom</TableHead>
              <TableHead className="text-purple-100">Rôle</TableHead>
              <TableHead className="text-purple-100">Visupoints</TableHead>
              <TableHead className="text-purple-100">Vues</TableHead>
              <TableHead className="text-purple-100">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id} className="border-purple-500/20">
                <TableCell className="text-white">{user.email}</TableCell>
                <TableCell className="text-white">{user.full_name || "—"}</TableCell>
                <TableCell>
                  <Select defaultValue={user.role} onValueChange={(value) => handleRoleChange(user.id, value)}>
                    <SelectTrigger className="w-32 bg-purple-900/20 border-purple-500/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="visitor">Visiteur</SelectItem>
                      <SelectItem value="porteur">Porteur</SelectItem>
                      <SelectItem value="investisseur">Investisseur</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-200">
                      {user.visupoints}
                    </Badge>
                    <Input
                      type="number"
                      placeholder="Ajuster"
                      className="w-20 h-7 bg-purple-900/20 border-purple-500/30 text-white text-xs"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          const value = Number.parseInt((e.target as HTMLInputElement).value)
                          if (!isNaN(value)) {
                            handleVisuPointsUpdate(user.id, value)
                            ;(e.target as HTMLInputElement).value = ""
                          }
                        }
                      }}
                    />
                  </div>
                </TableCell>
                <TableCell className="text-white">{user.total_views || 0}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/30 text-purple-200 hover:bg-purple-600/20 bg-transparent"
                    onClick={() => window.open(`/profile/${user.id}`, "_blank")}
                  >
                    Voir profil
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

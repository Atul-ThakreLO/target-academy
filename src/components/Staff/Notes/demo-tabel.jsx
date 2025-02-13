import React, { useState } from 'react';
import { 
  MoreHorizontal, 
  Search,
  Filter
} from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const NotesTable = () => {
  // Simple state management
  const [notes, setNotes] = useState([
    { id: 1, title: 'Meeting Notes', content: 'Discuss project timeline', category: 'Work', date: '2024-02-01' },
    { id: 2, title: 'Shopping List', content: 'Groceries for weekend', category: 'Personal', date: '2024-02-01' },
  ]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Simple filter logic
  const filteredNotes = notes.filter(note => {
    const matchesSearch = 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || note.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Selection handlers
  const toggleSelection = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) 
        ? prev.filter(selectedId => selectedId !== id)
        : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedIds(prev => 
      prev.length === filteredNotes.length ? [] : filteredNotes.map(note => note.id)
    );
  };

  // Action handlers
  const handleDelete = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
    setSelectedIds(prev => prev.filter(selectedId => selectedId !== id));
  };

  const handleBulkDelete = () => {
    setNotes(prev => prev.filter(note => !selectedIds.includes(note.id)));
    setSelectedIds([]);
  };

  return (
    <div className="space-y-4">
      {/* Search and filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              {categoryFilter === 'all' ? 'All Categories' : categoryFilter}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setCategoryFilter('all')}>
              All Categories
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCategoryFilter('Work')}>
              Work
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCategoryFilter('Personal')}>
              Personal
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {selectedIds.length > 0 && (
          <Button
            variant="destructive"
            size="sm"
            onClick={handleBulkDelete}
          >
            Delete Selected ({selectedIds.length})
          </Button>
        )}
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedIds.length === filteredNotes.length && filteredNotes.length > 0}
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredNotes.map(note => (
              <TableRow key={note.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedIds.includes(note.id)}
                    onCheckedChange={() => toggleSelection(note.id)}
                  />
                </TableCell>
                <TableCell>{note.title}</TableCell>
                <TableCell>{note.content}</TableCell>
                <TableCell>{note.category}</TableCell>
                <TableCell>{note.date}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="text-red-600"
                        onClick={() => handleDelete(note.id)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default NotesTable;
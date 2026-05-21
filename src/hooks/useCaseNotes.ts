import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import type { CaseNote } from '../types'

export function useCaseNotes() {
  const [cases, setCases] = useState<CaseNote[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCases = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('case_notes')
      .select('*')
      .order('updated_at', { ascending: false })
    if (error) setError(error.message)
    else setCases(data ?? [])
    setLoading(false)
  }, [])

  useEffect(() => { fetchCases() }, [fetchCases])

  const createCase = async (title: string, name: string): Promise<CaseNote | null> => {
    const { data, error } = await supabase
      .from('case_notes')
      .insert([{ title, name, content: '' }])
      .select()
      .single()
    if (error) { setError(error.message); return null }
    setCases((prev) => [data, ...prev])
    return data
  }

  const updateContent = async (id: number, content: string) => {
    const now = new Date().toISOString()
    const { error } = await supabase
      .from('case_notes')
      .update({ content, updated_at: now })
      .eq('id', id)
    if (error) setError(error.message)
    else setCases((prev) => prev.map((c) => c.id === id ? { ...c, content, updated_at: now } : c))
  }

  const deleteCase = async (id: number) => {
    const { error } = await supabase.from('case_notes').delete().eq('id', id)
    if (error) setError(error.message)
    else setCases((prev) => prev.filter((c) => c.id !== id))
  }

  return { cases, loading, error, createCase, updateContent, deleteCase }
}

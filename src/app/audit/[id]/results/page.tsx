import { notFound } from "next/navigation";
import { createServiceClient } from "@/lib/supabase";
import ResultsClient from "./ResultsClient";

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createServiceClient();

  const { data: result } = await supabase
    .from("assessment_results")
    .select("*")
    .eq("assessment_id", id)
    .single();

  if (!result) notFound();

  return <ResultsClient id={id} result={result} />;
}

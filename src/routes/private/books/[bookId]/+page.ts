import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent, params }) => {
  const { supabase } = await parent();
  const { bookId } = params;

  const { data } = await supabase
    .from("books")
    .select("*")
    .eq("id", Number(bookId))
    .single();

  if (data) {
    return { book: data }
  }

  return error(404, "Not found");
}
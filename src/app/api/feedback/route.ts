import {createClient} from "@/supabase/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const body = await request.json();
  const {starts} = body;

  const {data, error} = await supabase.from("feedback").insert([
    {
      starts,
      created_at: new Date(),
    },
  ]);

  if (error) {
    return new Response(JSON.stringify({error}), {status: 500});
  }

  return new Response(JSON.stringify({data}), {status: 200});
}

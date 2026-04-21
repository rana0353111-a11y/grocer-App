import { supabase } from "../supabase";

export const addToCartDB = async (product) => {
  const { data, error } = await supabase
    .from("cart")
    .insert([product]);

  if (error) console.log(error);
  else console.log("Saved:", data);
};
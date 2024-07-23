import { createClient } from "@supabase/supabase-js";

// normally, you should put these keys in an .env file
const URL = "https://qznbtzmyftdfrgyrchtw.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6bmJ0em15ZnRkZnJneXJjaHR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1NTk4MjYsImV4cCI6MjAzNzEzNTgyNn0.52DTS121L6yiit9upSbQKpa-kiEmUqANNYnZ05GyvSA";

export const supabase = createClient(URL, API_KEY);
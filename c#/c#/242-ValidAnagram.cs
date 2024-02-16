class ValidAnagram
{
    public static bool Solution(string s, string t)
    {
        if (s.Length != t.Length) return false;
        Dictionary<char, int> dict = new Dictionary<char, int>();

        for (int i = 0; i < s.Length; i++)
        {
            dict.TryAdd(s[i], 0);
            dict.TryAdd(t[i], 0);

            dict[s[i]]++;
            dict[t[i]]--;
        }

        foreach (KeyValuePair<char, int> entry in dict)
        {
            if (entry.Value != 0) return false;
        }
        return true;

        //foreach (char c in t.ToCharArray())
        //{
        //    if (!dict.TryGetValue(c, out int value))
        //    {
        //        return false;
        //    }
        //    if(value == 1)
        //    {
        //        dict.Remove(c);
        //    }
        //    else
        //    {
        //        dict[c] -= 1;
        //    }
        //}
        
        //return dict.Count == 0;
    }
}
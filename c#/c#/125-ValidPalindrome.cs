using System.Text.RegularExpressions;

class ValidPalindrome
{
    public static bool Solution(string s)
    {
        char[] value = Regex.Replace(s.ToLower(), "[^a-z0-9]", "").ToCharArray();
        if (value.Length < 2) return true;

        int start = 0;
        int end = value.Length - 1;

        while (start < end)
        {
            if (value[start++] != value[end--])
            {
                return false;
            }
        }
        return true;
    }
}
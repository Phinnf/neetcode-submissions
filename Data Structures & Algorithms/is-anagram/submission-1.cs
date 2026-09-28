public class Solution {
    public bool IsAnagram(string s, string t) {
           if (s.Length != t.Length) return false;
            char[] charS = s.ToCharArray();
            char[] charT = t.ToCharArray();
            Array.Sort(charS);
            Array.Sort(charT);
            return new string(charS) == new string(charT);
    }
}

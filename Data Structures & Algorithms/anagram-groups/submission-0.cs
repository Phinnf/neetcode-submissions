public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
         Dictionary<string, List<string>> anagramsWord = new Dictionary<string, List<string>>();

 foreach (string str in strs)
 {
     char[] strChar = str.ToCharArray();
     Array.Sort(strChar);
     string sortedStr = new string(strChar);
     if (!anagramsWord.ContainsKey(sortedStr))
     {
         anagramsWord[sortedStr] = new List<string>();
     }
     anagramsWord[sortedStr].Add(str);
 }
 return anagramsWord.Values.ToList<List<string>>();
    }
}

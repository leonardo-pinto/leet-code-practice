public class MajorityElement
{
    public static int Solution(int[] nums)
    {
        Dictionary<int, int> map = new Dictionary<int, int>();
        int limit = nums.Length/2;
        foreach (int item in nums)
        {
            if(map.TryGetValue(item, out int value))
            {
                if (value++ > limit)
                {
                    return item;
                } else
                {
                    map[item] = value;

                }
            } else
            {
                map.Add(item, 1);
            }
        }

        //foreach (KeyValuePair<int, int> item in map)
        //{
        //    if (item.Value > limit)
        //    {
        //        return item.Key;
        //    }
        }

        return 0;
    }
}
class TwoSum
{
    static int[] Solution(int[] nums, int target)
    {
        //int[] result = new int[2];
        //for (int i = 0; i < nums.Length; i++)
        //{
        //    for (int j = i + 1; j < nums.Length; j++)
        //    {
        //        if (nums[i] + nums[j] == target) 
        //        {
        //            result[0] = i;
        //            result[1] = j;
        //            break;
        //        }
        //    }
        //}
        //return result;

        Dictionary<int, int> dict = new Dictionary<int, int>
    {
        { nums[0], 0 }
    };
        for (int i = 1; i < nums.Length; i++)
        {
            if (dict.ContainsKey(target - nums[i]))
            {
                return new int[] { dict[target - nums[i]], i };
            }
            else if (!dict.ContainsKey(nums[i]))
            {
                dict.Add(nums[i], i);
            }
        }
        return new int[] { };
    }

}
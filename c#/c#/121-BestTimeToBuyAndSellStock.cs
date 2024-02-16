class BestTimeToBuyAndSellStock
{
    public static int Solution(int[] prices)
    {
        //int max = 0;
        //for (int i = 0; i < prices.Length; i++)
        //{
        //    for (int j = i + 1; j < prices.Length; j++)
        //    {
        //        max = Math.Max(max, prices[j] - prices[i]);
        //    }
        //}
        //return max;

        int left = 0;
        int right = 1;
        int max = 0;

        while (right < prices.Length)
        {
            if (prices[right] < prices[left])
            {
                left = right;
            }
            else
            {
                max = Math.Max(max, prices[right] - prices[left]);
            }
            right++;
        }
        return max;

        //int left = 0;
        //int right = 1;
        //int min = prices[left];
        //int max = prices[right];

        //while(right < prices.Length)
        //{

        //    max = Math.Max(max, prices[right++]);
        //    min = Math.Min(min, prices[left++]);
        //}
        //return max - min > 0 ? max - min : 0;
    }
}
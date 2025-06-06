using MU3.Client;
using MU3.DataStudio;

namespace MU3;

public class patch_PacketGetUserItem
{
    private extern void orig_addData(MU3.Client.UserItem userItem);

    private void addData(MU3.Client.UserItem userItem)
    {
        if (userItem.itemKind is (int)ItemType.IntimateUpItem or (int)ItemType.ExpUpItem)
        {
            if (userItem.stock < 200)
            {
                userItem.stock = 200;
            }
        }

        orig_addData(userItem);
    }
}
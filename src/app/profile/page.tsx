import UpdateButton from "@/components/UpdateButton";
import { updateUser } from "@/lib/actions";
import { wixClientServer } from "@/lib/wixClientServer";
import { members } from "@wix/members";
import Link from "next/link";
import { format } from "timeago.js";

const ProfilePage = async () => {
  let wixClient;
  try {
    wixClient = await wixClientServer();
    console.log("Wix client initialized successfully");
  } catch (error) {
    console.error("Error initializing Wix client:", error);
    return <div>Failed to initialize Wix client.</div>;
  }

  if (!wixClient || !wixClient.members) {
    console.error("Wix client or members module is undefined");
    return <div>Wix client not properly initialized.</div>;
  }

  let user;
  try {
    user = await wixClient.members.getCurrentMember({
      fieldsets: [members.Set.FULL],
    });
    console.log("User fetched successfully:", user);
  } catch (error) {
    console.error("Error fetching current member:", error);
    return <div>Error displaying user data.</div>;
  }

  if (!user.member?.contactId) {
    return <div className="">Not logged in!</div>;
  }

  let orderRes;
  try {
    orderRes = await wixClient.orders.searchOrders({
      search: {
        filter: { "buyerInfo.contactId": { $eq: user.member?.contactId } },
      },
    });
    console.log("Orders fetched successfully:", orderRes);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return <div>Error displaying orders.</div>;
  }

  return (
        <>

    {/* SVG WAVE SHAPE */}
    <div className="custom-shape-divider-bottom hidden md:block">
    <svg
      className="absolute bottom-0 w-full"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        className="shape-fill"
      ></path>
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        className="shape-fill"
      ></path>
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        className="shape-fill"
      ></path>
    </svg>
    </div>

          
    <div className="flex my-16 flex-col md:flex-row gap-24 md:h-[calc(100vh-400px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl six_caps-font text-bluey tracking-wider">Profile</h1>
        <form action={updateUser} className="mt-12 flex flex-col gap-4">
          <input type="text" hidden name="id" value={user.member.contactId} />
          <label className="text-sm text-gray-700">Change Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.member?.profile?.nickname || "john"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Change First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder={user.member?.contact?.firstName || "John"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Change Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder={user.member?.contact?.lastName || "Doe"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Phone Number for bettter communicaiton </label>
          <input
            type="text"
            name="phone"
            placeholder={
              (user.member?.contact?.phones &&
                user.member?.contact?.phones[0]) ||
              "+1234567"
            }
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.member?.loginEmail || "john@gmail.com"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <UpdateButton />
        </form>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl six_caps-font text-bluey tracking-wider">Orders</h1>
        <div className="mt-12 flex flex-col">
          {orderRes.orders.map((order) => (
            <Link
              href={`/orders/${order._id}`}
              key={order._id}
              className="flex justify-between px-2 py-6 rounded-md hover:bg-green-50 even:bg-slate-100"
            >
              <span className="w-1/4">{order._id?.substring(0, 10)}...</span>
              <span className="w-1/4">
                ${order.priceSummary?.subtotal?.amount}
              </span>
              {order._createdDate && (
                <span className="w-1/4">{format(order._createdDate)}</span>
              )}
              <span className="w-1/4">{order.status}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default ProfilePage;

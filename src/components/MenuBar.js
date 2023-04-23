import "../Styles/Styles.css";
import { MdDashboard } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { BsFillBagFill } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";

export default function MenuBar(props) {
  const {
    menuSelection,
    setMenuSelection,
    logged_in_email_val,
    setlogged_in_email_func,
    logged_in_firebase_val,
    setlogged_in_firebase_func,
    logged_in_name_val,
    setlogged_in_name_func,
    logged_in_photo_val,
    setlogged_in_photo_func,
    logged_in_auth_type_val,
    setlogged_in_auth_type_func,
    logged_in_token_val,
    setlogged_in_token_func,
    logged_in_phone_val,
    setlogged_in_phone_func,
  } = props;

  const handleClickProfile = () => {
    setMenuSelection("Profile");
  };

  const handleClickDashboard = () => {
    setMenuSelection("Dashboard");
  };

  const handleClickCurrentBookings = () => {
    setMenuSelection("CurrentBooking");
  };

  return (
    <div class="poppins">
      <div class="user-details">
        <div>
          {logged_in_photo_val ? (
            <img
              src={logged_in_photo_val}
              alt="Example image"
              className="nav-img"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            />
          ) : (
            <div>
              <HiUserCircle size="60" />
            </div>
          )}
        </div>

        <div>{logged_in_name_val}</div>
        <div>{logged_in_email_val}</div>
        <div>{logged_in_phone_val}</div>
      </div>

      <div class="options">
        <div class="opts ">
          <MdDashboard size="20" />
          <div
            class="margin-left-3"
            onClick={handleClickDashboard}
            style={{ cursor: "pointer" }}
          >
            Dashboard
          </div>
        </div>
        <div class="opts">
          <ImProfile size="20" />
          <div
            class="margin-left-3"
            onClick={handleClickProfile}
            style={{ cursor: "pointer" }}
          >
            View Profile
          </div>
        </div>
        <div class="opts">
          <BsFillBagFill size="20" />
          <div
            class="margin-left-3"
            onClick={handleClickCurrentBookings}
            style={{ cursor: "pointer" }}
          >
            Current Bookings
          </div>
        </div>
        <div class="opts">
          <MdWorkHistory size="20" />
          <div class="margin-left-3">Booking History</div>
        </div>
      </div>
    </div>
  );
}

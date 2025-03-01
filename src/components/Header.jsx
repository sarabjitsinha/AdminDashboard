import logo from "/logo.svg"
import search from "/search.svg"
import element from "/element.svg"
import notify from "/notifications.svg"
import profile from "/profile.svg"
import setting from "/setting.svg"
import "./header.css"

function Header(){
    return (
        <header >
            <div className="flex bg-gray-700 justify-between">
            <span className="text-white"><img src={logo} className="inline"/>Sarabjit</span>
                <div className="flex flex-wrap gap-4">
                    <img src={search} alt="" />
                    <img src={element} alt="" />
                    <div className=" flex relative">
                    <img src={notify} alt=""  />
                    <span className=" noti">2</span>
                    </div>
                    <img src={profile} alt="" />
                    <img src={setting} alt="" />
                </div>
            </div>

        </header>
    )
};

export default Header;
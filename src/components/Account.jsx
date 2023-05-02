import AccountImg from "../assets/icons/account.svg"
import Image from "../assets/icons/Ellipse-temp1.svg"
export const Account = (props) => {
console.log(props) 
const listItems = props.info.Data.NeuroBalises.map((e) =>
<p className="Post-Header-AsdList-Item2">{e}</p>
            //todo : extracte the data from the textarea
); 


const listItems2 = props.info.Data.InterestCenter.map((e) =>
<p className="Post-Header-AsdList-Item2">{e}</p>

);

const listItems3 = props.info.Data.NeuroBalises.map((e) =>
<p className="Post-Header-AsdList-Item">{e}</p>
            //todo : extracte the data from the textarea
); 

    return(
        <div className="Account">
            <div className="Account-Header">
                <img src={props.empty ? AccountImg : Image} alt=""  className="Account-Image"/>
                <div>
                    <p className="Account-Header-Names">
                        {props.info.Data.Name} {props.info.Data.FamilyName}
                    </p>
                    <div className="Tag-NeuroBalises">
                    {listItems}
                    </div>
                </div>
            </div>
            <div className="Account-sub">
            <div className="InterestCenter">
                <p className="InterestCenter-Title">Centre d'intérêt</p>
                <div className="InterestCenter-List">
                    {listItems2}
                    </div>
            </div>
            <div className="MyPost">
                <div className="MyPost-Header">
            <p className="MyPost-Title">Mon activité</p>
            <p className="CreatePost">Créer un post</p>
            </div>
            <div className="Post">
            <div className="Post-Header">
                <img src={props.empty ? AccountImg : Image} alt=""  className="Post-Image"/>
                <div className="Post-Header-Flex">
                    <p className="Post-Header-Names">
                    {props.info.Data.Name} {props.info.Data.FamilyName}
                    </p>
                    <div className="Post-Header-AsdList">
                        {listItems3}
                    </div>
                </div>
            </div>
            <p className="Post-text">{props.info.Data.Bio}</p>
        </div>
        </div>
        </div>
        </div>
        

    )
}
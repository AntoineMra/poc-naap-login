import React from "react";
import Image from "../assets/icons/Ellipse-temp1.svg"
import { Post } from "./Post"
export const News = (props) => {

    const EmptyPost = {
            Name : props.state.Name,
            FamilyName : props.state.FamilyName,
            NeuroBalises : props.state.NeuroBalises,
            Likes : 66,
            text : "",
    
        }
    const PostExemple = [
        {
            Name : "Gurvan",
            FamilyName : "Nicolas",
            NeuroBalises : [],
            Likes : 66,
            text : "Bonjour je suis nouveau sur Naapp et je suis très content de faire partie de cette communauté !",
    
        },
        {
            Name : "Lise",
            FamilyName :  "Honoré",
            NeuroBalises : [],
            Likes : 50164,
            text : "Le news letter de ce mois est très intéressante !",
    
        }
    ]

    return (
        <>
            <section className="NewsPage-section">
                <Post></Post>
            </section>
        </>
        
    )
}
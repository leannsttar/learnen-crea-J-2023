import React from "react"


export function DataProfile ({following, followers, posts}) {
    return (
        <div className="bg-[#F4F4F4] py-2 800:py-7 px-5 1280:px-10 flex flex-col gap-5 rounded-2xl text-[18px]">
            <p><span className="font-bold">{posts}</span> publicaciones</p>
            <p><span className="font-bold">{followers}</span> seguidores</p>
            <p><span className="font-bold">{following}</span> siguiendo</p>
        </div>
    )
}
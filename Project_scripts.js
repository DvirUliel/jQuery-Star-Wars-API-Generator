$(document).ready(function(){
    $("button").on("click",function(){
        const randomNum=Math.floor(Math.random() * 88)+1;
        $("p#Name").html("<em>Loading...</em>");
        $("p#Height").html("<em>Loading...</em>");
        $("p#Mass").html("<em>Loading...</em>");
        $("p#Gender").html("<em>Loading...</em>");
        $("p#Species").html("<em>Loading...</em>");
        $("p#HomeWorld").html("<em>Loading...</em>");
        $("p#Wiki").html("<em>Loading...</em>");
        $.get(
            `https://akabab.github.io/starwars-api/api/id/${randomNum}.json`,
            function(data){
                $("p#Name").text(data["name"]);
                $("p#Height").text(data["height"]);
                $("p#Mass").text(data["mass"]);
                $("p#Gender").text(data["gender"]);
                $("p#Species").text(data["species"]);
                $("p#HomeWorld").text(data["homeworld"]);
                $("p#Wiki").html(`<a href=${data["wiki"]} target=_blank>Move to the wiki page</a>`);
                $("#Image").attr("src",data["image"]);
                
                const id_list=
                    ["#Name","#Height","#Mass",
                    "#Gender","#Species","#HomeWorld","#Wiki"];

                id_list.forEach(id => {
                    if($(`p${id}`).html()==="<em>Loading...</em>"){
                        $(`p${id}`).text("Not found");
                    }
                })    
        })
    })
})
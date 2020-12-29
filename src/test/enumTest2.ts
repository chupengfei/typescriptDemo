enum Type{
    RUN = 1,
    GO = 2
}
interface Input{
    id: number,
    tpye: Type
}
function get(input:Input){
    console.log(input)
}

get({
    id: 1,
    tpye: Type.RUN
})


import http from './index'

//首页课程
export function homeCourse(){
    return http({
        method: "get",
        url: "/db",
    });
}
//课程中心顶部分类
export function classify(){
    return http({
        method: "get",
        url: "/db",
    });
}
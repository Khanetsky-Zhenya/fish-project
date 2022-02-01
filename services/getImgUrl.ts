export const getImgUrl = (path: string) => {
    return require(`/assets/img/${path}`).default.src
}

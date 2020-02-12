const locationArray = ["bottom", "left", "top", "right"];

export function getPropertySide(prop: any) {
    return locationArray[Math.floor(prop.location / 10)]
}
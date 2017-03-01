
export function ToPzn(pzn: number) {
    let num = pzn.toFixed(0);
    return '00000000'.substring(0, 8 - num.length).concat(num);
}
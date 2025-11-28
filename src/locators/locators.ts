export const commonLocators={
textBox:(textFieldName:string)=>`//td[text()='${textFieldName}']//following::input[1]`,
inputWithAttribute:(attributeName:string,value:string)=>`//input[@${attributeName}='${value}'][1]`
}
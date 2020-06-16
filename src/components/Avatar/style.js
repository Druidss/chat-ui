import styled, { css }  from 'styled-components'

const circleMixinFunc = (color) => css`
        content:"";
        display:block;
        position:absolute;
        width: 8px;
        height: 8px;
        border-radius:50%;
        background-color: ${color};  
`


const StyledAvatar = styled.div`
    position: relative;
`;
//头像组件最外层的容器

const StatusIcon = styled.div`
    position:absolute;
    left:2px;
    top:4px;
    
    &&::before{
        ${circleMixinFunc("white")}
        transform:scale(2);
    }

    &&::after{
     ${({theme}) => circleMixinFunc(theme.green)}
     /* content:"";
    display:block;
    position:absolute;
    width: 8px;
    height: 8px;
    border-radius:50%;
    background-color:green;   */
    }
`;
//头像的在线状态

const AvatarClip = styled.div`
    width:48px;
    height:48px;
    border-radius:50%;
    overflow:hidden;

`;
//头像蒙版

const AvatarImage = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center;
`;



//习惯将最外层容器默认导出 其他的 作为命名导出

export default StyledAvatar;
export { StatusIcon,AvatarClip,AvatarImage };

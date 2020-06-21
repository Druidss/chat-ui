import styled, { css }  from 'styled-components'
import { circle } from 'utils/mixins';

const circleMixinFunc = (color,size = "8px") => css`
        content:"";
        display:block;
        position:absolute;
        ${circle(color,size)}
`;


const StyledAvatar = styled.div`
    position: relative;
`;
//头像组件最外层的容器

const StatusIcon = styled.div`
    position:absolute;
    left:2px;
    top:4px;
    
    &&::before{
        ${({ size }) => circleMixinFunc("white",size)}

        transform:scale(2);
    }

    &&::after{
     ${({theme, status, size}) => {
         if (status === "online"){
             return circleMixinFunc(theme.green, size);
         }else if (status === "offline"){
             return circleMixinFunc(theme.gray, size);
         }

     }}
    }
`;
//头像的在线状态

const AvatarClip = styled.div`
    width:${({ size }) => size};
    height:${({ size }) => size};
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

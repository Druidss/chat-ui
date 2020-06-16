import React from 'react'
import PropTypes from 'prop-types'
import face1 from "../../assets/images/face-male-1.jpg"
import { isStyledComponent } from 'styled-components';
import StyledAvatar, { StatusIcon, AvatarClip, AvatarImage } from './style';

function Avatar({src,size = "48px",status,statusIconSize = "8px", ...rest }) {
    return (
        <StyledAvatar {...rest}>
            {status && (
                <StatusIcon status={status} size={statusIconSize}></StatusIcon>
            ) }
            
                <AvatarClip size={size}>
                    <AvatarImage src={src} alt="" />
                </AvatarClip>
        </StyledAvatar>
    );
}

Avatar.propTypes = {

}

export default Avatar

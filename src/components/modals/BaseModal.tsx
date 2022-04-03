import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
createStyles({
  root:{
      minWidth:300
  },
  boderLine:{
    border:`1px solid ${theme.palette.secondary.main}`
  }
}),
);

export interface BaseModalProps{
    readonly isOpen:boolean;
    readonly onClose?:()=>void;
    readonly title?:string;
    readonly style?:React.CSSProperties;
    readonly align?:'center'|'left'|'right';
    readonly textStyle?:React.CSSProperties;
    readonly color?:'error'|'primary'|'secondary'
    readonly maxWidth?: 'lg'| 'md'| 'sm'| 'xl'| 'xs'
}

const BaseModal:React.FC<BaseModalProps>=(props)=>{
    const {isOpen,onClose,title,children,style,align,textStyle,color,maxWidth}=props;
    const classes=useStyles();
    return(
        <>
        <Dialog onClose={onClose} maxWidth={maxWidth} aria-labelledby="alert-dialog-slide-title"  open={isOpen}>
        <MuiDialogTitle disableTypography className={classes.root} style={style}>
           <Typography variant='h6' color={color}  align={align} style={textStyle} >{title}</Typography>
         </MuiDialogTitle>
         <div className={classes.boderLine}></div>
         {children}
      </Dialog>
        </>
    )
}
export {MuiDialogContent as BaseModalContent}
export {MuiDialogActions as BaseModalAction}
export default BaseModal;
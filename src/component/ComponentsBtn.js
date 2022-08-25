function Button({title,onClick,href}){
    let Component = 'button';
    const props = {};
  
    if(href){
      Component = 'a'
      props.href = href;
    }
    if(onClick){
      props.onClick = onClick;
    }
  
  
    return(
      <Component {...props}>{title}</Component>
    )
  }
  export default Button;
const Exmple = () => {
    const PostFormData = (event)=>{
        event.preventDefault();
        alert('Submitted')
  }

  return (
    <div>
    <h1 style={{color:'red'}}>Prevent Reload page during Submit</h1>
    <form onSubmit={PostFormData}>
      <input type="text" placeholder="Enter your Name" />&nbsp;
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}
export default Exmple;

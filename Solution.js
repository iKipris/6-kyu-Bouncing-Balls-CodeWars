function bouncingBall(h,  bounce,  window) {
  if (checkif(h,bounce,window))
    {
      var counter=1;
      while (h>window)
        {
          h=bounce*h;
          console.log(h);
          counter=counter+2;
        }
      return counter-2;
    }
  else return -1;
}

function checkif(h,bounce,window)
{
  if (h>0 & (bounce>0 & bounce<1) & window<h)
    {
      return true;
    }
  else return false
}

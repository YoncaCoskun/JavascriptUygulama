 
            var slideCount = 1;
            var total = 6;
            var flag = false;

            function slide(x) {
                flag = true;
                var slide = document.getElementById('img');
                slideCount = slideCount + x;
                if (slideCount > total) {
                    slideCount = 1;
                }
                if(slideCount < 1){
                    slideCount = total;
                    }
                slide.src = "slide" + slideCount + ".jpg";
            }
            
                window.setInterval(function slideA() {
                    if (flag == false) {
                        var slide = document.getElementById('img');
                        slideCount = slideCount + 1;
                        if (slideCount > total) {
                            slideCount = 1;
                        }
                        if (slideCount < 1) {
                            slideCount = total;
                        }
                        slide.src = "slide" + slideCount + ".jpg";

                    }
                    return;
                }, 2000);
             
           

        
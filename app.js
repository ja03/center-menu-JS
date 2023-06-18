const social_icon = document.querySelector(".social");
            const lines = document.querySelectorAll(".line");
            const social_lines = Array.from(lines);
            console.log(social_lines[1]);
            const menu = document.querySelector(".menu");

            var key = true;
            function openMenu() {
                if (key) {
                    menu.style.display = "flex";
                    setTimeout(() => {
                        menu.style.opacity = 1;
                        social_lines.forEach((line) => {
                            line.style.backgroundColor = "#fff";
                        });
                    }, 150);
                    social_lines[0].style.transform =
                        "rotate(45deg) translateY(220%)";
                    social_lines[1].style.display = "none";
                    social_lines[2].style.transform =
                        "rotate(-45deg) translateY(-220%)";

                    key = !key;
                } else {
                    menu.style.opacity = 0;
                    setTimeout(() => {
                        menu.style.display = "none";
                    }, 300);
                    social_lines[0].style.transform =
                        "rotate(0deg) translateY(0%)";
                    social_lines[1].style.display = "block";
                    social_lines[2].style.transform =
                        "rotate(0deg) translateY(0%)";
                    social_lines.forEach((line) => {
                        line.style.backgroundColor = "#000";
                    });

                    key = !key;
                }
            }

            social_icon.addEventListener("click", () => {
                openMenu();
            });
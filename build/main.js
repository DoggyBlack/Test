$(document).ready(function(){function o(){var t=0==$(".footer__logos").offset().left;console.log(t),$(".footer__logos").delay(4e3).animate({marginLeft:t?-$(".footer__logos").width()/2:"0"},1e3,"linear",function(){t?($(".footer__left-point").removeClass("active"),$(".footer__right-point").addClass("active")):($(".footer__right-point").removeClass("active"),$(".footer__left-point").addClass("active")),o()})}$("#content").hide(),$("#menu").click(function(){$("#content").is(":hidden")?$("#content").show("slow"):$("#content").hide("slow")}),$("#calculation-content").hide(),$("#calculation").click(function(){$("#calculation-content").show("slow")}),$("#close").click(function(){$("#calculation-content").hide("slow")}),$(window).on("resize",function(){$(window).width()<481&&o()}).resize()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzdGFydCIsImRpbWVudGlvbiIsIm9mZnNldCIsImxlZnQiLCJjb25zb2xlIiwibG9nIiwiZGVsYXkiLCJhbmltYXRlIiwibWFyZ2luTGVmdCIsIndpZHRoIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhpZGUiLCJjbGljayIsImlzIiwic2hvdyIsIndpbmRvdyIsIm9uIiwicmVzaXplIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQTJCZCxRQUFTQyxLQUVMLEdBQUlDLEdBQWlELEdBQXJDSixFQUFFLGtCQUFrQkssU0FBU0MsSUFDN0NDLFNBQVFDLElBQUlKLEdBRVpKLEVBQUUsa0JBQWtCUyxNQUFNLEtBQU1DLFNBQzVCQyxXQUFZUCxHQUFjSixFQUFFLGtCQUFrQlksUUFBVyxFQUFJLEtBQzlELElBQU0sU0FBVSxXQUNWUixHQUlESixFQUFFLHVCQUF1QmEsWUFBWSxVQUNyQ2IsRUFBRSx3QkFBd0JjLFNBQVMsWUFKbkNkLEVBQUUsd0JBQXdCYSxZQUFZLFVBQ3RDYixFQUFFLHVCQUF1QmMsU0FBUyxXQUt0Q1gsTUF6Q1JILEVBQUUsWUFBWWUsT0FDZGYsRUFBRSxTQUFTZ0IsTUFBTSxXQUNUaEIsRUFBRSxZQUFZaUIsR0FBRyxXQUVqQmpCLEVBQUUsWUFBWWtCLEtBQUssUUFJbkJsQixFQUFFLFlBQVllLEtBQUssVUFNM0JmLEVBQUUsd0JBQXdCZSxPQUMxQmYsRUFBRSxnQkFBZ0JnQixNQUFNLFdBQ3BCaEIsRUFBRSx3QkFBd0JrQixLQUFLLFVBRW5DbEIsRUFBRSxVQUFVZ0IsTUFBTSxXQUNkaEIsRUFBRSx3QkFBd0JlLEtBQUssVUFHbkNmLEVBQUVtQixRQUFRQyxHQUFHLFNBQVUsV0FDbkJwQixFQUFFbUIsUUFBUVAsUUFBVSxLQUFNVCxNQUMzQmtCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKFwiI2NvbnRlbnRcIikuaGlkZSgpO1xuICAgICQoXCIjbWVudVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQoXCIjY29udGVudFwiKS5pcyhcIjpoaWRkZW5cIikpIHtcblxuICAgICAgICAgICAgJChcIiNjb250ZW50XCIpLnNob3coXCJzbG93XCIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICQoXCIjY29udGVudFwiKS5oaWRlKFwic2xvd1wiKTtcblxuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgICQoXCIjY2FsY3VsYXRpb24tY29udGVudFwiKS5oaWRlKCk7XG4gICAgJChcIiNjYWxjdWxhdGlvblwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIiNjYWxjdWxhdGlvbi1jb250ZW50XCIpLnNob3coXCJzbG93XCIpO1xuICAgIH0pO1xuICAgICQoXCIjY2xvc2VcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIjY2FsY3VsYXRpb24tY29udGVudFwiKS5oaWRlKFwic2xvd1wiKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh3aW5kb3cpLndpZHRoKCkgPCA0ODEgPyBzdGFydCgpIDogZmFsc2VcbiAgICB9KS5yZXNpemUoKTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuXG4gICAgICAgIHZhciBkaW1lbnRpb24gPSAkKFwiLmZvb3Rlcl9fbG9nb3NcIikub2Zmc2V0KCkubGVmdCA9PSAwO1xuICAgICAgICBjb25zb2xlLmxvZyhkaW1lbnRpb24pO1xuXG4gICAgICAgICQoXCIuZm9vdGVyX19sb2dvc1wiKS5kZWxheSg0MDAwKS5hbmltYXRlKHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGRpbWVudGlvbiA/IC0oJChcIi5mb290ZXJfX2xvZ29zXCIpLndpZHRoKCkpIC8gMiA6IFwiMFwiXG4gICAgICAgIH0sIDEwMDAsICdsaW5lYXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghZGltZW50aW9uKSB7XG4gICAgICAgICAgICAgICAgJChcIi5mb290ZXJfX3JpZ2h0LXBvaW50XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgJChcIi5mb290ZXJfX2xlZnQtcG9pbnRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIi5mb290ZXJfX2xlZnQtcG9pbnRcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAkKFwiLmZvb3Rlcl9fcmlnaHQtcG9pbnRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl19

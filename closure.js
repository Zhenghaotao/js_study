function create_counter(initial){
	var x = initial || 0;
	return {
		inc:function(){
			x += 1;
			return x;
		}
	}
}

var c1 = create_count();
c1.inc();//1
c1.inc();//2
c1.inc();//3


var c2 = create_count(10);
c2.inc();//11
c2.inc();//12
c2.inc();//13


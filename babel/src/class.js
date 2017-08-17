class Dog{

	constructor (name,age){
		this.name = name;
		this.age = age;
	}

	wang (){
		console.log(Dog.eat(),111); 
		console.log(this.name + "汪汪汪")
	}

	// static 定义静态属性方法,只能在函数内部调用。 静态方法不会被继承
	static eat (){
		//静态方法中的this属性无法被读取
		console.log(this.name + "开始吃饭");
	}

}
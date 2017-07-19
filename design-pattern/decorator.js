/**
 * 父类是WuXia人物.
 * 要创建具有不同特征的实例
 * 华山派会剑法
 * 华山派会拳法
 * 武当派会拳法
 * 武当派会剑法
 * ...
 */

class WuXia {
	constructor (name, age) {
		this.name = name
		this.age = age
		this.skill = ''
		this.skills = []
		this.life = 1000
		this.harmVal = 0
	}
	addLife (lifeVal) {
        this.life += lifeVal
        console.log(this.name + '当前生命值为: '  + this.life)
    }
    xiWu (skill) {
        console.log(this.name + '学习了新技能: '  + skill.name)
        this.skills.push(skill)
    }
    chooseSkill () {
        const len = this.skills.length
        this.skill = this.skills[parseInt(Math.random() * len)]
        this.harmVal = this.skill.harmVal
        console.log(this.name + '当前在使用'  + this.skill.name + '技能')
    }
    joinBangPai (bangPai) {
        this.bangPai = bangPai
        console.log(this.name + '加入' + this.bangPai)
    }
}

// 一个装饰类继承原类的所有方法.
class WuXiaDecorator {
    constructor (wuxia) {
        this.wuxia = wuxia
    }
    addLife (lifeVal) {
        this.wuxia.addLife(lifeVal)
    }
    xiWu (skill) {
        this.wuxia.xiWu(skill)
    }
    chooseSkill () {
        this.wuxia.chooseSkill()
    }
    joinBangPai (bangPai) {
        this.wuxia.joinBangPai(bangPai)
    }
}
// 修饰增加生命方法, 增加生命值随机波动
class addLifeDecorator extends WuXiaDecorator{
    constructor (wuxia) {
        super(wuxia)
    }
    // 重写增加生命方法, 修饰原有的方法
    addLife (val) {
        val += parseInt(Math.random() * 100)
        this.wuxia.addLife(val)
    }
}

// 改变原有类的方法, 加入帮派的时候获取技能
class joinBangPaiDecorator extends WuXiaDecorator {
    constructor (wuxia) {
        super(wuxia)
    }
    joinBangPai (bangPai) {
        if (bangPai === '华山派') this.wuxia.xiWu({name: '华山剑法', harmVal: 99})
        if (bangPai === '武当派') this.wuxia.xiWu({name: '太极拳', harmVal: 110})
        this.wuxia.joinBangPai(bangPai)
    }
}



var linghuchong = new WuXia('令狐冲', 18)
linghuchong = new WuXiaDecorator(linghuchong)
linghuchong = new joinBangPaiDecorator(linghuchong)
linghuchong = new addLifeDecorator(linghuchong)

linghuchong.addLife(100)
console.log(linghuchong.life) // 此时增加的生命值是经过修饰之后的值
linghuchong.joinBangPai('华山派') // 加入帮派是修饰过的方法, 会增加一项技能
console.log('skills', linghuchong.skills)
console.log(linghuchong)
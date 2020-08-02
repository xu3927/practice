# 练习
# 工作年限与收入之间的散点图
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import statsmodels.api as sm

plt.close('all')
# 导入数据
income = pd.read_csv('linear-regression/Salary_Data.csv')
# 绘制图形
# sns.lmplot(x='YearsExperience', y='Salary', data=income)
# 显示图形
# plt.show()

# 一元线性回归模型求解
n = income.shape[0]  # DataFrame.shape 二维数组的维度


sum_x = income.YearsExperience.sum()
sum_y = income.Salary.sum()
sum_x2 = income.YearsExperience.pow(2).sum()
xy = income.YearsExperience * income.Salary
sum_xy = xy.sum()

# 计算 b 的值
b = (sum_xy - sum_x * sum_y / n) / (sum_x2 - sum_x**2 / n)
a = (sum_y - b * sum_x) / n

print('b=', b)
print('a=', a)

# 使用 statsmodels 模块计算
# 1. 构建回归模型
fit = sm.formula.ols('Salary ~ YearsExperience', data=income).fit()
# 2. 查看参数
print('statsmodels计算的回归参数:', fit.params)

#接口文档
## 管理系统
###账号管理
#### 1. 登录
请求地址： /manager/login
请求类型   POST
参数列表

| 字段名 | 字段描述 | 类型 | 是否必填 | 示例 |
| -     |       |       |
| account |  登录账号  | string | 是 | weijiafen |
| password |  登录密码  | string | 是 | weijiafen |
| type | 登录角色:1管理员，2柜台账号，3厨房账号，4个人账号 | int | 是 | 1 |
返回值
```
    {
        "status":0,
        "msg":"success"，
        "data":{
            "userName":"wade"
        }
    }
```
#### 2. 获取账号列表
请求地址：/manager/accounts

请求类型   GET

参数列表    无

返回值
```
    {
	"status":0,
	"data":[
		{
			"id":1,
			"userName":"weijiafen",
			"account":"weijiafen",
			"status":0,
			"type":2
		},
		{
			"id":2,
			"userName":"wade",
			"account":"wade",
			"status":1,
			"type":3
		}
	],
	"msg":"success"
}
```
#### 3. 新增账号
请求地址： /manager/account

请求类型   POST

参数列表

| 字段名 | 字段描述 | 类型 | 是否必填 | 示例 |
| -     |       |       |
| account |  登录账号  | string | 是 | weijiafen |
| userName |  账号昵称  | string | 是 | weijiafen |
| password |  登录密码  | string | 是 | weijiafen |
| confirmPassword |  确认登录密码  | string | 是 | weijiafen |
| type | 登录角色:1管理员，2柜台账号，3厨房账号，4个人账号 | int | 是 | 1 |
| ischeck| 是否验证账号存在，1：验证账号，可不传密码；0：新增账号 | int | 是 | 1 |
返回值
```
    {
        "status":0,
        "msg":"success"，
        "data":{
            "id":12,
            "account":"wade",
            "userName":"wade",
            "type":2,
            "status":1
        }
    }
```
#### 4. 修改账号信息
请求地址： /manager/account

请求类型   PUT

参数列表

| 字段名 | 字段描述 | 类型 | 是否必填 | 示例 |
| -     |       |       |
| account |  登录账号  | string | 是 | weijiafen |
| userName |  账号昵称  | string | 是 | weijiafen |
| type |  登录账号  | int | 是 | 2 |
| isModifyPassword |  是否修改密码  | int | 是 | 0：不修改密码，不需传新密码；1：修改密码，必须传新密码和确认密码 |
| password |  登录密码  | string | 否 | weijiafen |
| confirmPassword |  确认登录密码  | string | 否 | weijiafen |
|status|切换启用/禁用状态|int|否|传此参数则只使用启用禁用功能
返回值
```
    {
        "status":0,
        "msg":"success"
    }
```
#### 5. 删除账号
请求地址： /manager/account

请求类型   delete

参数列表    

| 字段名 | 字段描述 | 类型 | 是否必填 | 示例 |
| -     |       |       |
| id |  登录id  | int | 是 | 1 |
返回值
```
    {
        "status":0,
        "msg":"success"
    }
```
###菜单管理
#### 6. 获取菜单列表
请求地址： /manager/categories

请求类型   get

参数列表   无

返回值
```
    {
        "status":0,
        "msg":"success",
        "data":[
            {
                "id":1,
                "text":"香烟"
            },
            {
                "id":2,
                "text":"饮料"
            }
        ]
    }
```
#### 7. 保存菜单
请求地址： /manager/categories

请求类型： post

参数列表

| 字段名 | 字段描述 | 类型 | 是否必填 | 示例 |
| -     |       |       |
| categoryList |  菜单项数组  | Array | 是 | - |
```
{
    "categoryList":[
        {
            "id":0,//id为0代表新增一个菜单
            "text":"香烟"
        }
    ]
}
```

返回值
```
    {
        "status":0,
        "msg":"success",
        "data":[
            {
                "id":1,
                "text":"香烟"
            }
        ]
    }
```

#### 8. 删除菜单
请求地址： /manager/categories

请求类型： delete

参数列表

| 字段名 | 字段描述 | 类型 | 是否必填 | 示例 |
| -     |       |       |
| id |  菜单项id  | int | 是 | 1 |

返回值
```
    {
        "status":0,
        "msg":"success"
    }
```

### 商品管理
#### 9. 获取商品列表
请求地址： /manager/goods

请求类型： get

参数列表
| 字段名 | 字段描述 | 类型 | 是否必填 | 示例 |
| -     |       |       |
| page |  页码  | int | 是 | 1 |
| pageSize |  每页条数  | int | 是 | 10 |
返回值
```
{
    "status":0,
    "msg":"success",
    "data":[
        {
            "id":1,
            "categoryId":1,
            "category":"香烟",
            "name":"利群",
            "description":"用心灵，去旅行！",
            "price":14.00,
            "tags":[
                {
                    "id":1,
                    "text":"进口",
                    "color":"#20a0ff"
                },
                {
                    "id":2,
                    "text":"免税",
                    "color":"#13ce66"
                }
            ],
            "account":22,
            "online":1
        },
        {
            "id":2,
            "categoryId":1,
            "category":"香烟",
            "name":"双喜",
            "description":"囍传天下！",
            "price":11.00,
            "tags":[
                {
                    "id":1,
                    "text":"进口",
                    "color":"#20a0ff"
                }
            ],
            "account":11,
            "online":1
        }
    ],
    "total":2
}
```

#### 10. 新增商品
请求地址： /manager/goods

请求类型： post

参数列表
| 字段名 | 字段描述 | 类型 | 是否必填 | 示例 |
| -     |       |       |
| categoryId |  所属分类  | int | 是 | 1 |
| name |  商品名字  | string | 是 | "利群" |
| description |  商品描述  | string | 是 | "用心灵，去旅行" |
| tags |  商品标签  | Array | 是 | id:0表示新增的标签 |
| price |  价格  | int | 是 | 1400（分） |
| account |  剩余数量  | int | 是 | 22（-1为无限） |
| online |  是否上架  | int | 是 | 1：上架；0：下架 |
返回值
```
{
    "status":0,
    "msg":"success",
    "data":{
            "id":1,
            "categoryId":1,
            "category":"香烟",
            "name":"利群",
            "description":"用心灵，去旅行！",
            "price":14.00,
            "tags":[
                {
                    "id":1,
                    "text":"进口",
                    "color":"#20a0ff"
                }
            ],
            "account":22,
            "online":1
    }
}
```
#### 11. 编辑商品
请求地址： /manager/goods

请求类型： put

参数列表
| 字段名 | 字段描述 | 类型 | 是否必填 | 示例 |
| -     |       |       |
| id |  商品id  | int | 是 | 1 |
| categoryId |  所属分类  | int | 是 | 1 |
| name |  商品名字  | string | 是 | "利群" |
| description |  商品描述  | string | 是 | "用心灵，去旅行" |
| tags |  商品标签  | Array | 是 | id:0表示新增的标签 |
| price |  价格  | int | 是 | 1400（分） |
| account |  剩余数量  | int | 是 | 22（-1为无限） |
| online |  是否上架  | int | 是 | 1：上架；0：下架 |
返回值
```
{
    "status":0,
    "msg":"success"
}
```

#### 12. 删除商品
请求地址： /manager/goods

请求类型： delete

参数列表
| 字段名 | 字段描述 | 类型 | 是否必填 | 示例 |
| -     |       |       |
| id |  商品id  | int | 是 | 1 |
返回值
```
{
    "status":0,
    "msg":"success"
}
```

#### 13. 删除标签
请求地址： /manager/tags

请求类型： delete

参数列表
| 字段名 | 字段描述 | 类型 | 是否必填 | 示例 |
| -     |       |       |
| id |  标签id  | int | 是 | 1 |
返回值
```
{
    "status":0,
    "msg":"success"
}
```
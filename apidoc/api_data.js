define({ "api": [
  {
    "type": "put",
    "url": "/api/users/agent/:id",
    "title": "Edit Agent infomation (restriction: 'authorized')",
    "name": "EditAgent",
    "group": "Agent",
    "parameter": {
      "fields": {
        "route params": [
          {
            "group": "route params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>(OPTIONAL) Agent's unique ID.</p>"
          }
        ],
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(OPTIONAL) Agent's new name.</p>"
          },
          {
            "group": "request body",
            "type": "Array[String]",
            "optional": false,
            "field": "languages",
            "description": "<p>(OPTIONAL) Agent's languages (Should be an array of these languages: ['Chinese', 'Spanish', 'English', 'Hindi', 'Arabic', 'Malay/Indonesian', 'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Korean', 'German','Punjabi/Lahnda', 'Telugu'].</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>(OPTIONAL) Agent's city name ('New York City', 'Chicago', 'San Diego')</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>(OPTIONAL) Agent's phone number</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>(OPTIONAL) Agent's introduction text</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "photoURL",
            "description": "<p>(OPTIONAL) Agent's photoURL</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Agent(User).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>&quot;user&quot;, &quot;agent&quot;, &quot;admin&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoURL",
            "description": "<p>profile photo url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Name of city,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "languages",
            "description": "<p>JSON.stringify(Array of lanaguageName) ex) &quot;[&quot;Korean&quot;, &quot;Spanish&quot;]&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Simple profile text,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>user(agent) unique id, *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"email\": \"example@example.com\",\n  \"facebook\": Object,\n  \"name\": \"John Doe\",\n  \"provider\": \"google\",\n  \"role\": \"agent\",\n  \"_id\": \"59483862c27e982e0f84c210\"\n  \"photoURL\": \"https://sokaspdo.asodkasd.asdasd/soks.jpg\"\n  \"location\": \"San Diego\",\n  \"languages\": [ \"Korean\", \"Spanish\"],\n  \"phone\": \"858-211-1111\",\n  \"text\": \"I am .......................\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/user/user.controller.js",
    "groupTitle": "Agent"
  },
  {
    "type": "get",
    "url": "/api/users/agent/:id",
    "title": "Request a single agent's information",
    "name": "GetAgentInfo",
    "group": "Agent",
    "parameter": {
      "fields": {
        "route params": [
          {
            "group": "route params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's(Agent's) unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Agent(User).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>&quot;user&quot;, &quot;agent&quot;, &quot;admin&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoURL",
            "description": "<p>profile photo url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Name of city,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "languages",
            "description": "<p>Names of language (array)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Simple profile text,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>user(agent) unique id,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"email\": \"example@example.com\",\n  \"facebook\": Object,\n  \"name\": \"John Doe\",\n  \"provider\": \"google\",\n  \"role\": \"agent\",\n  \"_id\": \"59483862c27e982e0f84c210\"\n  \"photoURL\": \"https://sokaspdo.asodkasd.asdasd/soks.jpg\"\n  \"location\": \"San Diego\",\n  \"languages\": [ \"Korean\", \"Spanish\"],\n  \"phone\": \"858-211-1111\",\n  \"text\": \"I am .......................\",\n  \"avgRate\": 4.6\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/user/user.controller.js",
    "groupTitle": "Agent"
  },
  {
    "type": "get",
    "url": "/api/users/agents?location=:location&language=:language&page=:page",
    "title": "Request Agents list",
    "name": "GetAgentsInfo",
    "group": "Agent",
    "parameter": {
      "fields": {
        "query params": [
          {
            "group": "query params",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>(OPTIONAL) Name of city. At least one of location or languate are needed</p>"
          },
          {
            "group": "query params",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>(OPTIONAL) Name of language. At least one of location or languate are needed. Should be one of these: ['Chinese', 'Spanish', 'English', 'Hindi', 'Arabic', 'Malay/Indonesian', 'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Korean', 'German','Punjabi/Lahnda', 'Telugu'].</p>"
          },
          {
            "group": "query params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>(OPTIONAL) page of list.. (10 agents per page, default value 0)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"name\": \"John Doe\",\n  \"role\": \"agent\",\n  \"location\": \"San Diego\",\n  \"languages\": [ \"Spanish\", \"Korean\", ...],\n  \"text\": \"I am from Korea and live here 30 years. I am good at searching a good apartment.\"\n  \"phone\": \"213-378-2134\"\n  \"_id\": \"59483862c27e982e0f84c210\",\n  \"avgRate\": 4.1\n},\n ...\n ...\n{\n  \"name\": \"Jane Doe\",\n  \"role\": \"agent\",\n  \"location\": \"San Diego\",\n  \"languages\": [ \"Spanish\", \"Korean\", ...],\n  \"text\": \"I am from Spain and live here 30 years. I am good at searching a good apartment.\"\n  \"phone\": \"213-221-2134\"\n  \"_id\": \"59483dddd86e982e0f84c210\",\n  \"avgRate\": 4.2\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/user/user.controller.js",
    "groupTitle": "Agent"
  },
  {
    "type": "get",
    "url": "/auth/facebook/agent",
    "title": "Facebook signup/login for agent",
    "name": "FacebookSignInForAgent_signup_",
    "group": "Auth",
    "version": "0.0.0",
    "filename": "server/auth/facebook/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/facebook",
    "title": "Facebook signup/login for user",
    "name": "FacebookSignInForUser_signup_",
    "group": "Auth",
    "version": "0.0.0",
    "filename": "server/auth/facebook/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/google/agent",
    "title": "Google signup/login for user",
    "name": "GoogleSignInForAgent_signup_",
    "group": "Auth",
    "version": "0.0.0",
    "filename": "server/auth/google/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/google",
    "title": "Google signup/login for user",
    "name": "GoogleSignInForUser_signup_",
    "group": "Auth",
    "version": "0.0.0",
    "filename": "server/auth/google/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/local",
    "title": "Local signup for user/agent",
    "name": "LocalSignIn",
    "group": "Auth",
    "parameter": {
      "fields": {
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email.</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/auth/local/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/twitter/agent",
    "title": "Twitter signup/login for user",
    "name": "TwitterSignInAgent_signup_",
    "group": "Auth",
    "version": "0.0.0",
    "filename": "server/auth/twitter/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/twitter",
    "title": "Twitter signup/login for user",
    "name": "TwitterSignInUser_signup_",
    "group": "Auth",
    "version": "0.0.0",
    "filename": "server/auth/twitter/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/api/comments/:id",
    "title": "Delete a Comment (restriction: authenticated)",
    "name": "DeleteComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "route params": [
          {
            "group": "route params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Comment unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/comment/comment.controller.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/api/comments/agent/:agentId?page=:page",
    "title": "Request Comment List of an Agent",
    "name": "GetCommentListOfAgent",
    "group": "Comment",
    "parameter": {
      "fields": {
        "query params": [
          {
            "group": "query params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number(integer). Default value is 0</p>"
          }
        ],
        "route params": [
          {
            "group": "route params",
            "type": "String",
            "optional": false,
            "field": "agentId",
            "description": "<p>Agent(User) unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"agentId\": \"59483862c27e982e0f84c210\",\n  \"author\": {\n     _id: \"59483862c27e982e0f84c210\",\n     name: \"John Doe\"\n  },\n  text: \"Hello. This is an example comment\",\n  createdAt:\n  updatedAt:\n},\n...\n...\n{\n  ...\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/comment/comment.controller.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/api/comments/:id",
    "title": "Request a single comment",
    "name": "GetSingleComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "route params": [
          {
            "group": "route params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comment",
            "description": "<p>comment object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"agentId\": \"59483862c27e982e0f84c210\",\n  \"author\": {\n     _id: \"59483862c27e982e0f84c210\",\n     name: \"John Doe\"\n  },\n  text: \"Hello. This is an example comment\",\n  createdAt:\n  updatedAt:\n},",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/comment/comment.controller.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/api/comments/:agentId",
    "title": "Create a Comment (restriction: authenticated)",
    "name": "PostComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "route params": [
          {
            "group": "route params",
            "type": "String",
            "optional": false,
            "field": "agentId",
            "description": "<p>Agent(User) unique ID.</p>"
          }
        ],
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>comment text</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "rate",
            "description": "<p>star rate (integer from 0 to 5)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comment",
            "description": "<p>comment object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"agentId\": \"59483862c27e982e0f84c210\",\n  \"author\": {\n     _id: \"59483862c27e982e0f84c210\",\n     name: \"John Doe\"\n  },\n  text: \"Hello. This is an example comment\",\n  rate: 3\n  createdAt:\n  updatedAt:\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/comment/comment.controller.js",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/api/comments",
    "title": "Update a Comment (restriction: authenticated)",
    "name": "UpdateComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "route params": [
          {
            "group": "route params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Comment unique ID.</p>"
          }
        ],
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "agentId",
            "description": "<p>(Optional) Agent(User) unique ID.</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>(Optional) comment text</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "rate",
            "description": "<p>(Optional) star rate (integer from 0 to 5)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comment",
            "description": "<p>comment object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"agentId\": \"59483862c27e982e0f84c210\",\n  \"author\": {\n     _id: \"59483862c27e982e0f84c210\",\n     name: \"John Doe\"\n  },\n  text: \"Hello. This is an example comment\",\n  rate: 3\n  createdAt:\n  updatedAt:\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/comment/comment.controller.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/api/photo/s3-signed-req",
    "title": "Request signed s3 url for photo upload",
    "name": "GetS3SignedUrl",
    "group": "Photo",
    "parameter": {
      "fields": {
        "query params": [
          {
            "group": "query params",
            "type": "String",
            "optional": false,
            "field": "file-name",
            "description": "<p>filename</p>"
          },
          {
            "group": "query params",
            "type": "String",
            "optional": false,
            "field": "file-type",
            "description": "<p>filetype</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  filename: \"skylinelogo.jpg\",\n  signedRequest: \"https://ooops.s3.amazonaws.com/skylinelogo.jpg?AWSAccessKeyId=AKIAIFZTKXQ6JEZKFDQA.....\",\n  url: \"https://ooops.s3.amazonaws.com/skylinelogo.jpg\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/photo/photo.controller.js",
    "groupTitle": "Photo"
  },
  {
    "type": "put",
    "url": "/api/users/:id/password",
    "title": "Change User Password (restriction: 'authorized')",
    "name": "ChangePassword",
    "group": "Users",
    "parameter": {
      "fields": {
        "route params": [
          {
            "group": "route params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ],
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>Users old password.</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>Users new password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/user/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "Create User",
    "name": "Create_User_or_Agent",
    "group": "Users",
    "parameter": {
      "fields": {
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email.</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>(OPTIONAL) &quot;user&quot; or &quot;agent&quot;, default is &quot;user&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>json web token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/user/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/api/users/:id",
    "title": "Request User's own information (restriction: 'admin')",
    "name": "DeleteUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "route params": [
          {
            "group": "route params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/user/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/api/users/:id",
    "title": "Edit User infomation (restriction: 'authorized')",
    "name": "EditUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "route params": [
          {
            "group": "route params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>(OPTIONAL) User's unique ID.</p>"
          }
        ],
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(OPTIONAL) User's new name.</p>"
          },
          {
            "group": "request body",
            "type": "Array[String]",
            "optional": false,
            "field": "languages",
            "description": "<p>(OPTIONAL) User's languages (Should be an array of these languages: ['Chinese', 'Spanish', 'English', 'Hindi', 'Arabic', 'Malay/Indonesian', 'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Korean', 'German','Punjabi/Lahnda', 'Telugu'].</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>(OPTIONAL) User's city name ('New York City', 'Chicago', 'San Diego')</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>(OPTIONAL) User's phone number</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>(OPTIONAL) User's introduction text</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "photoURL",
            "description": "<p>(OPTIONAL) User's photoURL</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Agent(User).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>&quot;user&quot;, &quot;agent&quot;, &quot;admin&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoURL",
            "description": "<p>profile photo url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Name of city,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "languages",
            "description": "<p>JSON.stringify(Array of lanaguageName) ex) &quot;[&quot;Korean&quot;, &quot;Spanish&quot;]&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Simple profile text,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>user(agent) unique id, *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"email\": \"example@example.com\",\n  \"facebook\": Object,\n  \"name\": \"John Doe\",\n  \"provider\": \"google\",\n  \"role\": \"agent\",\n  \"_id\": \"59483862c27e982e0f84c210\"\n  \"photoURL\": \"https://sokaspdo.asodkasd.asdasd/soks.jpg\"\n  \"location\": \"San Diego\",\n  \"languages\": [ \"Korean\", \"Spanish\"],\n  \"phone\": \"858-211-1111\",\n  \"text\": \"I am .......................\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/user/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/",
    "title": "Request All User List (restriction: 'admin')",
    "name": "GetAllUser",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Object",
            "description": "<p>array of user Object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/user/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/me",
    "title": "Request User's own information (restriction: 'authorized')",
    "name": "GetMyInfo",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"email\": \"example@example.com\",\n  \"google\": Object,\n  \"name\": \"John Doe\",\n  \"provider\": \"google\",\n  \"photoURL\": \"https://sokaspdo.asodkasd.asdasd/soks.jpg\"\n  \"role\": \"user\",\n  \"_id\": \"59483862c27e982e0f84c210\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/user/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "Request User's own information",
    "name": "GetUserInfo",
    "group": "Users",
    "parameter": {
      "fields": {
        "route params": [
          {
            "group": "route params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"John Doe\",\n  \"role\": \"user\",\n  \"location\": \"San Diego\",\n  \"_id\": \"59483862c27e982e0f84c210\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/user/user.controller.js",
    "groupTitle": "Users"
  }
] });

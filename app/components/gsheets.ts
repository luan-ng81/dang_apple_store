import { google } from "googleapis";

export async function getGoogleSheetsData(range: string) {
  const auth = await google.auth.getClient({
    projectId: "dang-apple-store",
    credentials: {
      type: "service_account",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDKr/H33Zuh/FBq\ncEDPdBmJ6xKMUaxfHwUBT7cqLKUbZzm9Bv4DWLx3u+GTXVzCJloNYoDaPCFUnPS0\ns6Y/Ql4IqvtDO0pQowW5K0o27Z0TG6joPi0wxbYP23LXYITJJdq02DTjdcv9Hpok\n2uP9o2Egd4dzcXl/jS7awJC8Pq7vnw/EkjTp7Lx4erJ/vaxnV5u5gMCE5mgBtjC6\n6aXXMGpz8H/bA3Oj3J3O+UB3KFRDqZCY5H+obDEgKyQPyhJQpX6pv+9GmE3a1pEr\nIVSyypa0BYVMC64tnmIMPl4Yanh4FfjBiYrYutBfGuojBGsuIJFEJBV5K5z/0ZH7\nadjbpEcbAgMBAAECggEARQABsR5lmY8CN0Hwpk8BVLTMcy1or1cpholDMx3QtVP+\nUW38clo2itJQmDDL36JbvLvAXsrik+H84jlYSqfGyE+gywH3qhzdWWy1zp40f2lG\npo1oJ/bepGZSIaUPf0SeQDtsQdT7tTdCRXKo89M3QOzAFVpXgMco4Lp2a0cxmYvj\nIQWCox4DTKlB9KyIk8ilVMIpI+uc3WowM90jjFUdUp+Dp5bZ9Jb3N+p4npYk9nTJ\nStnd+vWpcSLWjwR/lNXmu/unGADH5NLNV3MvJVlF/Mb88XA726PTZjoqEnfnjdnE\nYp4u27BI+XRvU27SAhxJI5465vDz7oDx1gkxLdLxMQKBgQDmka3H0id5DMX2jOO+\nTBalb4cOkFq5VovkerjHgOs9HPzwnyyc5I6zBETRjFx20C8T5kyYj3dGPOJjn66d\nGQFp1tGqi4UBBwx59AL4sPQf7SGTKxLWli0PxEgk0HdgQ2hwJwMRsLmSJ67IkYSU\n8U8fdXIVJ/hIJe0FSv4RcNQZMQKBgQDhCv/3+k1yzWYGKQQy8BcVuWdOQMvE9o0x\ny76c7WpFqaY/V4hb64iNuttBrbn50gfSBRNM8M/T3eHbvjIc7HGMFarQsx0T1qIA\nvtlkLTTMCvCSJWkdrcOXsHJ3HvOmmynm8R2/HI0/C67VnW5bNDQGLygRKOAWBInz\nDAJuDG3SCwKBgGFh5iQffsyBuJsJpqcZO/djw4dDMQ5Wn39A1gptSO3m8G4wzIb3\ngc3aX7ahsev8weWFv5QwBBCGZpftObLgfNhXAvclNmfYskxP43FmS7WwUh32c15u\nz1l5bX8fDUx7LAEyePlfywEQAaJ006qUwPZohGarGxJd8l3p7qUvImYBAoGBALD2\nZGhMpMBk8hhgApRHpe+IVsr7OwFMW6VPsTlXnFzhVgCzRV/66+t/h1CzWu4vEcU+\nBnpXVyYkcanJe0CxUWy10RfB8VibS9NIQEx9G+pjo99Ymbsj3A2ZS7mOVkyp8R5Q\ndnLE8fEkr7v8yz3e5BYE2P39ZZEKyqubwwFktqsXAoGBAL7ah976xKIlJ/AOYwXl\nP9aMhMhZi92y2Q20Kr21maqO0qsVpt2CzYjwwjbyNhGMKd66I820mash+SJPOZCr\n45uSQAWTQFYwqPMnyjCshnBNHjK5UlseQxUSXGjWIst4ZnJcLfVUDgRWKxoufGdG\nVw/rohxhkkYZAs0vdxGNo+1H\n-----END PRIVATE KEY-----\n",
      client_email: "dang-apple-store@dang-apple-store.iam.gserviceaccount.com",
      client_id: "112042911261024235797",
      token_url: "https://oauth2.googleapis.com/token",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: "1x7EHhYmIwqwLRJOB6Wz7Hq5FQCSB7FshErs8suuP3dU",
    range: range,
  });

  return data.data.values;
}

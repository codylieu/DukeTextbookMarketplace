import sys, re, json, ast
from urllib2 import Request, urlopen, URLError

def selectListingInfo():
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/selectListingInfo.php"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
        print reformatSelectListingInfo(response.read())
#         return reformatSelectListingInfo(response.read())
    except URLError,e:
        return e

def fixURL(url):
    return url.replace (" ", "%20")

def reformatSelectListingInfo(jsonResp):
#     print eval(jsonResp)
    result = []
    resultDict = {}
#     deptAlreadyInResultList =[]
    
    for item in eval(jsonResp):
        departmentDict = {}
        itemDict = ast.literal_eval(json.dumps(item, sort_keys=True,indent=4, separators=(',', ': ')))
        deptName = itemDict["deptName"]
        if (deptName not in resultDict.keys()):
            departmentDict["name"] = deptName
            departmentDict["courses"] = []
            coursedict = {}
            coursedict["name"] = itemDict["class_id"]
            textbookdict = {}
            textbookdict["name"] = itemDict['title']
            textbookdict["isbn"] = itemDict['isbn']
            textbookdict["course"] = itemDict['class_id']
#             textbookdict["condition"]= itemDict['conditionOfBook']
            textbookdict["department"] = itemDict['deptName']
            coursedict["textbook"] = textbookdict
            departmentDict["courses"].append(coursedict)
            resultDict[deptName] = departmentDict
        else:
            departmentDict = resultDict[deptName]
            coursedict = {}
            coursedict["name"] = itemDict["class_id"]
            textbookdict = {}
            textbookdict["name"] = itemDict['title']
            textbookdict["isbn"] = itemDict['isbn']
            textbookdict["course"] = itemDict['class_id']
#             textbookdict["condition"]= itemDict['conditionOfBook']
            textbookdict["department"] = itemDict['deptName']
            coursedict["textbook"] = textbookdict
            departmentDict["courses"].append(coursedict)
            
            
#     print itemDict
    print resultDict
#         print type(itemDict)
        
if __name__ == '__main__':
    selectListingInfo()
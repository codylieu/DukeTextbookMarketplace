import sys, re, json, ast
from urllib2 import Request, urlopen, URLError

def selectListingInfo():
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/selectListingInfo.php"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
        reformatedJSON = reformatSelectListingInfo(response.read())
        print reformatedJSON
        return reformatedJSON
    except URLError,e:
        return e

def fixURL(url):
    return url.replace (" ", "%20")

def reformatSelectListingInfo(jsonResp):
#     print eval(jsonResp)
    result = []
    usedCourse = []
    resultDict = {}
#     deptAlreadyInResultList =[]
    
    for item in eval(jsonResp):
        departmentDict = {}
        itemDict = ast.literal_eval(json.dumps(item, sort_keys=True,indent=4, separators=(',', ': ')))
        deptName = itemDict["deptName"]
        if (deptName not in resultDict.keys() and itemDict["class_id"] not in usedCourse):
            departmentDict["name"] = deptName
            departmentDict["courses"] = []
            coursedict = {}
            coursedict["name"] = itemDict["class_id"]
            usedCourse.append(itemDict["class_id"])
            coursedict["textbook"] = []
            textbookList = getAllTextbook(eval(jsonResp),deptName,itemDict['class_id'])
#             print textbookList
            for textbook in textbookList:
                textbookdict = {}
                textbookdict["name"] = textbook['title']
                textbookdict["isbn"] = textbook['isbn']
                textbookdict["course"] = textbook['class_id']
    #             textbookdict["condition"]= itemDict['conditionOfBook']
                textbookdict["department"] = textbook['deptName']
                coursedict["textbook"].append(textbookdict)
                
            departmentDict["courses"].append(coursedict)
            resultDict[deptName] = departmentDict
        else:
            if (itemDict["class_id"] not in usedCourse):
                departmentDict = resultDict[deptName]
                coursedict = {}
                coursedict["name"] = itemDict["class_id"]
                usedCourse.append(itemDict["class_id"])
                coursedict["textbook"] = []
                textbookList = getAllTextbook(eval(jsonResp),deptName,itemDict['class_id'])
#             print textbookList
                for textbook in textbookList:
                    textbookdict = {}
                    textbookdict["name"] = textbook['title']
                    textbookdict["isbn"] = textbook['isbn']
                    textbookdict["course"] = textbook['class_id']
        #             textbookdict["condition"]= itemDict['conditionOfBook']
                    textbookdict["department"] = textbook['deptName']
                    coursedict["textbook"].append(textbookdict)
                departmentDict["courses"].append(coursedict)
            
            
    for value in resultDict.values():
        result.append(value)
    
    return result
        
    
def getAllTextbook(jsonResp,deptName,courseID):
    result = []
    for item in jsonResp:
        textbookInfo = {}
        if(item['deptName'] == deptName and item['class_id'] == courseID):
            textbookInfo["title"] = item['title']
            textbookInfo["isbn"] = item['isbn']
            textbookInfo["class_id"] = item['class_id']
            textbookInfo["deptName"] = item['deptName']
            result.append(textbookInfo)
    
    return result
                

        
if __name__ == '__main__':
    selectListingInfo()
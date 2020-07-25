# TestCafe sample scripts documentation

# 1. Create a folder and open the folder in Visual studio code
# 2. install nodejs using cmd:npm install
# 3. Create package.jason file using the cmd: npm init and answer the questions that comes on your screen
# 4. install test cafe using the cmd: npm install --save-dev testcafe
# 5. you can use yarn insted of npm

# yarn is also similar to npm but yarn caches all installed packages.
# if yarn is installed you donot need to store node_modules in your project root folder
# To use yarn in your project

# 6. intall yann using the cmd: yarn install
# 7. to add testcafe using yarn run the cmd : yarn add test cafe ( The advantage of using yarn to add testcafe is it always adds the latest version to your project)
# 8. To generate html reports cmd: testcafe chrome sampleTest.js --reporter html:sampleTest.html
# 9. To run your test in headless mode for chrome cmd: testcafe "chrome:headless" sampleTest.js
# 10. To take screen shot cmd: testcafe chrome sampleTest.js -S -s screenshots
# 11. To run your tests in different browsers cmd: testcafe chrome,firefox sampeTest.js
# 12. To run the same instance of chrome more than once cmd : testcafe -c 2 chrome sampleTest.js
# 13. To run faild test cases again in all the detected browsers use the quarantine mode 
# cmd: testcafe all tests sampleTest.js -q --reporter html:sampleTest.html

public with sharing class FirstComponentController {
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccounts(){
        try {
            return [SELECT Name, AccountNumber FROM Account LIMIT 5];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
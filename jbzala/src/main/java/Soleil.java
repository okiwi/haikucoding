public class Soleil {

    public static void main(String[] args) {
        quand(LE_SOLEIL.brille(),
                Meteo.affiche("Le soleil brille sur le geekcamp"),
                Meteo.affiche("Le soleil ne brille pas sur le geekcamp"));
    }
















    


    private static void quand(boolean brille, Runnable vrai, Runnable faux) {
        if(brille) {
            vrai.run();
            return;
        }
        faux.run();
    }

    private boolean brille() {
        return Meteo.TEMPS_PRESENT.get() <= Meteo.ETE;
    }

    public static final Soleil LE_SOLEIL = new Soleil();
}

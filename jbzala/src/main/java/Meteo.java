import java.util.function.Supplier;

public class Meteo {
    static Runnable affiche(String chaine) {
        return () -> System.out.println(chaine);
    }

    public static final double ETE = 0.9;
    public static final Supplier<Double> TEMPS_PRESENT = Math::random;
}
